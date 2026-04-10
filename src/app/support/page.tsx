"use client";

import { useState, useRef } from "react";

const SUPPORT_API = "https://telesyncapi.vaultsuite.store/api/support/ticket";
const CALENDAR_URL = "https://calendar.app.google/gaZfdYSQZfSj6uMg9";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

export default function SupportPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [emailError, setEmailError] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    if (emailError) setEmailError("");
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const totalFiles = files.length + selectedFiles.length;

    if (totalFiles > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const validFiles = selectedFiles.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} exceeds 5MB limit`);
        return false;
      }
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} is not an image`);
        return false;
      }
      return true;
    });

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setFiles([...files, ...validFiles]);
    setPreviews([...previews, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    URL.revokeObjectURL(previews[index]);
    setFiles(files.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      setSubmitting(true);
      setResult(null);

      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      body.append("app", "telesync");

      files.forEach((file) => {
        body.append("images", file);
      });

      const response = await fetch(SUPPORT_API, {
        method: "POST",
        body,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to submit ticket");
      }

      const data = await response.json();

      setResult({
        success: true,
        message: data.message || "Support ticket submitted successfully!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      previews.forEach((p) => URL.revokeObjectURL(p));
      setFiles([]);
      setPreviews([]);
    } catch (error) {
      setResult({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit support ticket. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid =
    formData.email && formData.subject && formData.message && !emailError;

  return (
    <div className="min-h-screen bg-[#FFF9EB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9EB]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold flex items-center gap-2">
            <img src="/telesync-icon.svg" alt="TeleSync" className="w-8 h-8 rounded-lg" /> TeleSync
          </a>
          <a
            href="/"
            className="font-medium text-gray-800 hover:text-black transition-colors"
          >
            &larr; Back to Home
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#0088CC] to-[#00B4D8] rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Support</h1>
            <p className="text-gray-500">
              Need help? Send us a message and we&apos;ll get back to you
            </p>
          </div>
        </div>

        {/* Support Form */}
        <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0_0_#000] mb-8">
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-[#0088CC] focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                onBlur={() => {
                  if (formData.email && !validateEmail(formData.email)) {
                    setEmailError("Please enter a valid email address");
                  }
                }}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border-2 rounded-xl text-base focus:outline-none transition-colors ${
                  emailError
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-[#0088CC]"
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {emailError}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="What do you need help with?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-[#0088CC] focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Describe your issue or question in detail..."
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-[#0088CC] focus:outline-none transition-colors resize-y"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Attachments{" "}
                <span className="text-gray-400 font-normal">
                  (Optional — Max 5 images, 5MB each)
                </span>
              </label>

              <div className="flex flex-wrap gap-3 mb-3">
                {previews.map((preview, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-24 rounded-xl border-2 border-gray-200 overflow-hidden group"
                  >
                    <img
                      src={preview}
                      alt={`Attachment ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setPreviewImage(preview)}
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      X
                    </button>
                  </div>
                ))}

                {files.length < 5 && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 hover:border-[#0088CC] hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <span className="text-2xl">📷</span>
                    <span className="text-[10px] text-gray-500">Upload</span>
                  </button>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />

              <p className="text-xs text-gray-400">
                Click on uploaded images to preview them
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || submitting}
              className={`w-full py-4 rounded-xl border-2 border-black font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                isFormValid && !submitting
                  ? "bg-[#0088CC] text-white shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {submitting ? "Sending..." : "Submit Support Ticket"}
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div
            className={`rounded-2xl border-2 p-6 mb-8 ${
              result.success
                ? "bg-green-50 border-green-400"
                : "bg-red-50 border-red-400"
            }`}
          >
            <div
              className={`font-bold text-lg mb-1 ${
                result.success ? "text-green-800" : "text-red-800"
              }`}
            >
              {result.success
                ? "✅ Ticket Submitted!"
                : "❌ Submission Failed"}
            </div>
            <p
              className={`text-sm ${
                result.success ? "text-green-700" : "text-red-700"
              }`}
            >
              {result.message}
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[4px_4px_0_0_#000]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#0088CC] rounded-xl flex items-center justify-center shrink-0">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-3">How We Can Help</h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Technical issues with TeleSync or your Telegram bot</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Questions about triggers, actions, or workflow setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Feature requests or suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Bug reports with screenshots</span>
                </li>
              </ul>

              <div className="mt-5 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <strong>📧 Response Time:</strong> We typically respond within
                24 hours. You will receive a reply at the email you provided.
              </div>

              <div className="mt-3 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <strong>📅 Need more help?</strong> Book a free one-on-one
                session with our team:{" "}
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0088CC] underline hover:text-blue-900"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg z-10 border-2 border-black"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border-2 border-black"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1F2937] py-8" style={{ color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: "#9ca3af" }}>
            &copy; 2026 TeleSync. Telegram Integration for GoHighLevel.
          </p>
          <p className="flex items-center gap-2" style={{ color: "#9ca3af" }}>
            🔒 Your data stays yours. We never store message content.
          </p>
        </div>
      </footer>
    </div>
  );
}
