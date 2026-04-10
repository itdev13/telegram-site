import { Button } from "@/components/ui/Button";
import { InstallButton } from "@/components/ui/InstallButton";
import { StickyHighlight } from "@/components/ui/StickyHighlight";
import { Card, FeatureCard, TestimonialCard } from "@/components/ui/Card";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { HandArrow } from "@/components/decorative/HandArrow";
import { FAQ } from "@/components/ui/FAQ";
import { ProductMockup } from "@/components/ui/ProductMockup";

const COLORS = {
  cream: "#FFF9EB",
  telegram: "#0088CC",
  sky: "#87CEEB",
  yellow: "#FFE711",
  coral: "#FF7F4A",
  pink: "#FF94E7",
  dark: "#1F2937",
};

const MARKETPLACE_URL = "https://marketplace.gohighlevel.com/integration/YOUR_TELESYNC_ID";
const CALENDAR_URL = "https://calendar.app.google/gaZfdYSQZfSj6uMg9";

const faqItems = [
  {
    question: "Is TeleSync officially on the GHL Marketplace?",
    answer:
      "Yes! We're an approved GHL Marketplace integration. Install directly from your GoHighLevel account — completely free to install.",
  },
  {
    question: "How do I connect my Telegram bot?",
    answer:
      "Create a bot with @BotFather on Telegram, copy your bot token, and paste it in TeleSync settings. Connection takes under 60 seconds — no coding required.",
  },
  {
    question: "What triggers are available for GHL workflows?",
    answer:
      "TeleSync provides 6 triggers: New Message Received, Bot Started (/start), Contact Joined Group, Media Received (photos, videos, documents), Command Received (custom /commands), and Callback Query (inline button clicks).",
  },
  {
    question: "What actions can I use in workflows?",
    answer:
      "11 actions are available: Send Message, Send Photo, Send Document, Send Video, Reply to Message, Send to Group, React with Emoji, Pin Message, Edit Message, Delete Message, and Forward Message.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Simple usage-based pricing at $0.001 per message processed. That's just $1.00 per 1,000 messages. All charges go through your GHL Wallet — no external payments needed.",
  },
  {
    question: "Can I send messages to Telegram groups?",
    answer:
      "Yes! TeleSync supports both 1:1 conversations and group messaging. Add your bot to any Telegram group and use the 'Send to Group' action in GHL workflows to broadcast messages.",
  },
  {
    question: "Do Telegram messages appear in GHL Conversations?",
    answer:
      "Yes — all messages sent to your Telegram bot appear directly in the GHL Conversations tab. Your team can reply from GHL and the response is delivered via Telegram instantly.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use OAuth 2.0, encrypted tokens, and automatic token refresh. We're GDPR compliant and we never store message content — only routing metadata.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9EB]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold flex items-center gap-2">
            <img src="/telesync-icon.svg" alt="TeleSync" className="w-8 h-8 rounded-lg" /> TeleSync
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="font-medium text-gray-800 hover:text-black transition-colors">
              Features
            </a>
            <a href="#triggers-actions" className="font-medium text-gray-800 hover:text-black transition-colors">
              Triggers &amp; Actions
            </a>
            <a href="#pricing" className="font-medium text-gray-800 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#faq" className="font-medium text-gray-800 hover:text-black transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <InstallButton variant="tertiary" className="!rounded-lg !px-5 !py-2 !text-base">
              Install Now
            </InstallButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#FFF9EB] pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <span className="font-bold text-[#0088CC]">✈️ Free to Install</span>
                <span className="flex items-center gap-1">Usage-Based Pricing</span>
                <span className="text-gray-500">&rarr;</span>
              </a>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                Telegram Meets{" "}
                <StickyHighlight rotate={-3} className="whitespace-nowrap">
                  GoHighLevel
                </StickyHighlight>
              </h1>

              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                Two-way Telegram integration for GHL. Send and receive messages, automate workflows with 6 triggers and 11 actions — all from your CRM.
              </p>

              <div className="inline-block bg-blue-100 px-5 py-3 rounded-full border-2 border-blue-300">
                <span className="font-bold text-blue-800">
                  ⚡ 6 Triggers · 11 Actions · Two-Way Sync · Group Messaging
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <InstallButton variant="primary" size="large">
                  Get Started Now
                </InstallButton>
                <Button variant="outline" size="large" href="#how-it-works">
                  See How It Works
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Two-Way Messaging</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>No credit card required</span>
                </span>
              </div>

              {/* Testimonial */}
              <figure className="pt-8 border-t border-gray-200">
                <blockquote className="text-lg italic text-gray-700">
                  &ldquo;TeleSync opened up a whole new channel for us. Our Telegram leads now flow directly into GHL and the workflow automations save us hours every day.&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full" />
                  <div>
                    <div className="font-semibold">James T.</div>
                    <div className="text-sm text-gray-500">GHL Agency Owner</div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Right content - Product mockup */}
            <div className="relative hidden lg:block ml-8">
              <div className="absolute -left-32 top-1/4 z-20 transform -rotate-6">
                <HandArrow direction="right" text="connect your bot" textClassName="text-2xl" />
              </div>

              <div
                className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-[#B3E5FC] border-2 border-black rounded-2xl"
                style={{ transform: "rotate(2deg)", zIndex: 0 }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <ProductMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.pink} variant={1} />

      {/* Pain Points Section */}
      <section className="relative bg-[#FF94E7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Your Telegram Leads Are Falling Through the Cracks
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Telegram is massive — but GHL doesn&apos;t support it natively. Here&apos;s what agencies deal with:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                😤
              </div>
              <h3 className="font-bold text-xl mb-2">
                Manual Copy-Pasting
              </h3>
              <p className="text-gray-600">
                Switching between Telegram and GHL to manually copy messages, contact info, and lead data. Slow and error-prone.
              </p>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                🔒
              </div>
              <h3 className="font-bold text-xl mb-2">
                No Workflow Automation
              </h3>
              <p className="text-gray-600">
                Can&apos;t trigger GHL workflows from Telegram messages. No auto-replies, no lead tagging, no pipeline automation.
              </p>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                ⚠️
              </div>
              <h3 className="font-bold text-xl mb-2">
                Missed Conversations
              </h3>
              <p className="text-gray-600">
                Telegram messages don&apos;t show in GHL Conversations. Your team misses leads because they&apos;re not checking two platforms.
              </p>
            </Card>
          </div>

          <p className="text-center mt-10 text-lg font-medium">
            Sound familiar? <StickyHighlight rotate={2}>TeleSync fixes all of this.</StickyHighlight>
          </p>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.pink} toColor={COLORS.cream} variant={2} />

      {/* How It Works Section */}
      <section className="relative bg-[#FFF9EB] py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            Connect Telegram to GHL in under 2 minutes — no coding required
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                🤖
              </div>
              <h3 className="font-bold text-2xl mb-3">1. Create Your Bot</h3>
              <p className="text-gray-600 leading-relaxed">
                Open @BotFather on Telegram, create a new bot, and copy your bot token. Takes 30 seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-green-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                🔗
              </div>
              <h3 className="font-bold text-2xl mb-3">2. Connect in TeleSync</h3>
              <p className="text-gray-600 leading-relaxed">
                Paste your bot token in TeleSync settings. We verify the connection instantly and your bot goes live.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-pink-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                ⚡
              </div>
              <h3 className="font-bold text-2xl mb-3">3. Build Workflows</h3>
              <p className="text-gray-600 leading-relaxed">
                Use 6 triggers and 11 actions in your GHL workflows. Auto-reply, send to groups, react with emojis, and more.
              </p>
            </div>
          </div>

          <div className="text-center">
            <InstallButton variant="primary" size="large">
              Get Started Now
            </InstallButton>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.telegram} variant={3} />

      {/* Features Section */}
      <section id="features" className="relative bg-[#0088CC] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#ffffff" }}>
            Powerful <StickyHighlight rotate={-2}>Features</StickyHighlight>
          </h2>
          <p className="text-center mb-12 max-w-xl mx-auto text-lg" style={{ color: "#E0F7FA" }}>
            Everything you need to run Telegram as a first-class channel in GHL
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon="💬"
              title="Two-Way Messaging"
              description="Messages sent to your Telegram bot appear in GHL Conversations. Reply from GHL and it's delivered via Telegram instantly. Your team never leaves the CRM."
              badge="⭐ CORE FEATURE"
              badgeColor="#FFE711"
              iconBgColor="#BBDEFB"
              accentColor="#0088CC"
            />

            <FeatureCard
              icon="⚡"
              title="Workflow Automation"
              description="6 triggers and 11 actions for GHL workflows. Auto-reply to messages, tag contacts, move pipeline stages, send to groups — all triggered by Telegram events."
              badge="⭐ MOST POWERFUL"
              badgeColor="#FFE711"
              iconBgColor="#C8E6C9"
              accentColor="#4CAF50"
            />

            <FeatureCard
              icon="👥"
              title="Group Broadcasting"
              description="Add your bot to Telegram groups and broadcast messages from GHL workflows. Perfect for announcements, updates, and community engagement."
              iconBgColor="#F3E5F5"
              accentColor="#9C27B0"
            />

            <FeatureCard
              icon="📎"
              title="Rich Media Support"
              description="Send and receive photos, videos, documents, and files. Trigger workflows when media is received. Forward media between Telegram and GHL seamlessly."
              iconBgColor="#FDE68A"
              accentColor="#D97706"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ GHL Conversations Sync
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Workflow Triggers
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Workflow Actions
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Group Support
              </span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.telegram} toColor={COLORS.cream} variant={4} />

      {/* Triggers & Actions Section */}
      <section id="triggers-actions" className="relative bg-[#FFF9EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Triggers &amp; Actions
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Build powerful automations with these workflow building blocks
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Triggers Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-200 border-2 border-black rounded-xl flex items-center justify-center text-xl shadow-[3px_3px_0_0_#000]">
                  🎯
                </div>
                <h3 className="text-2xl font-bold">6 Triggers</h3>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "💬", name: "New Message Received", desc: "Contact sends a text message to your bot" },
                  { icon: "🚀", name: "Bot Started (/start)", desc: "New user starts your Telegram bot" },
                  { icon: "👥", name: "Contact Joined Group", desc: "Someone joins a group your bot monitors" },
                  { icon: "📸", name: "Media Received", desc: "Photo, video, or document sent to bot" },
                  { icon: "⌨️", name: "Command Received", desc: "Custom /command sent to your bot" },
                  { icon: "🔘", name: "Callback Query", desc: "Inline keyboard button clicked" },
                ].map((trigger) => (
                  <div
                    key={trigger.name}
                    className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0_0_#000] flex items-center gap-4 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#000]"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl shrink-0">
                      {trigger.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{trigger.name}</div>
                      <div className="text-sm text-gray-500">{trigger.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-200 border-2 border-black rounded-xl flex items-center justify-center text-xl shadow-[3px_3px_0_0_#000]">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold">11 Actions</h3>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "📤", name: "Send Message", desc: "Send text message via Telegram" },
                  { icon: "🖼️", name: "Send Photo", desc: "Send an image to a contact or group" },
                  { icon: "📄", name: "Send Document", desc: "Send files and documents" },
                  { icon: "🎬", name: "Send Video", desc: "Send video content" },
                  { icon: "↩️", name: "Reply to Message", desc: "Reply to a specific message in thread" },
                  { icon: "👥", name: "Send to Group", desc: "Broadcast message to a Telegram group" },
                  { icon: "😀", name: "React with Emoji", desc: "Add emoji reaction to a message" },
                  { icon: "📌", name: "Pin Message", desc: "Pin important messages in chats" },
                  { icon: "✏️", name: "Edit Message", desc: "Edit a previously sent message" },
                  { icon: "🗑️", name: "Delete Message", desc: "Delete a message from chat" },
                  { icon: "↗️", name: "Forward Message", desc: "Forward message to another chat" },
                ].map((action) => (
                  <div
                    key={action.name}
                    className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0_0_#000] flex items-center gap-4 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#000]"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl shrink-0">
                      {action.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{action.name}</div>
                      <div className="text-sm text-gray-500">{action.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[#FFF9EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Loved by GHL Agencies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="TeleSync opened up Telegram as a real channel for us. Leads flow into GHL automatically and the workflow triggers are incredibly powerful."
              author="James T."
              role="GHL Agency Owner"
              rotate={-1.5}
            />

            <TestimonialCard
              quote="The group broadcasting feature is a game changer. We send updates to our Telegram community directly from GHL workflows — fully automated."
              author="Sofia M."
              role="Community Manager"
              rotate={1}
            />

            <TestimonialCard
              quote="Setting up the bot took 60 seconds. Now all our Telegram conversations show up in GHL and my team can handle everything from one place."
              author="Ryan K."
              role="Agency Founder"
              rotate={-0.5}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              🏆 GHL Marketplace
            </div>
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              ⭐ 5-Star Rating
            </div>
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              ✈️ Telegram Native
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.yellow} variant={1} />

      {/* Pricing Section */}
      <section id="pricing" className="relative bg-[#FFE711] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Simple Usage-Based Pricing
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Pay only for messages processed. No subscriptions, no surprises.
          </p>

          <div className="max-w-xl mx-auto">
            <Card hover={false} className="shadow-[8px_8px_0_0_#000]">
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">6 workflow triggers + 11 workflow actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">Two-way messaging &amp; GHL Conversations sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">Group broadcasting &amp; rich media support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">Automatic GHL Wallet payment</span>
                </div>
              </div>

              <hr className="border-gray-200 mb-6" />

              {/* Pricing Table */}
              <h3 className="font-bold text-lg mb-4">Message Pricing</h3>
              <div className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
                <div className="grid grid-cols-2 bg-gray-100 font-bold text-sm p-3">
                  <div>Volume</div>
                  <div>Price</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200">
                  <div className="text-gray-700">Per Message</div>
                  <div className="font-semibold">$0.001</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200">
                  <div className="text-gray-700">Per 1,000 messages</div>
                  <div className="font-semibold">$1.00</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200 bg-indigo-50">
                  <div className="text-indigo-600 font-semibold">Per 10,000 messages</div>
                  <div className="text-indigo-600 font-semibold">$10.00</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200 bg-green-50">
                  <div className="font-bold">Per 100,000 messages</div>
                  <div className="font-bold">$100.00</div>
                </div>
              </div>

              <hr className="border-gray-200 mb-6" />

              <p className="text-gray-700 mb-2">
                We charge through the <strong>GHL Wallet</strong> system.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>No</strong> need for <strong>external</strong> payments or <strong>credit card</strong> information — everything stays safe and controlled inside GoHighLevel.
              </p>

              <InstallButton variant="tertiary" size="large" className="w-full text-lg">
                Install Now
              </InstallButton>
            </Card>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.yellow} toColor={COLORS.cream} variant={2} />

      {/* FAQ Section */}
      <section id="faq" className="bg-[#FFF9EB] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Contact Us / Feature Request Section */}
      <section className="bg-[#FF94E7] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#FFF9EB] border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a custom Telegram workflow?
              </h2>
              <p className="text-gray-600 text-lg">
                We&apos;re always adding new triggers, actions, and features. Tell us what you need and we&apos;ll make it happen!
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href="mailto:features@vaultsuite.store?subject=TeleSync%20Feature%20Request"
                className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">💡</span>
                <span className="font-semibold">Request a Feature</span>
              </a>

              <a
                href={CALENDAR_URL}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-[#FF7F4A] px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">💬</span>
                <span className="font-semibold">Book a Call</span>
              </a>

              <a
                href="mailto:hello@vaultsuite.store"
                className="flex items-center justify-center gap-3 bg-[#0088CC] text-white px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">📧</span>
                <span className="font-semibold">Say Hello</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-[#FFF9EB] py-24">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect Telegram to GHL?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Join agencies using TeleSync to automate Telegram conversations in GoHighLevel.
          </p>

          <InstallButton variant="primary" size="large" className="text-lg px-10">
            Install Now — It&apos;s Free
          </InstallButton>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <StickyHighlight rotate={-1}>Incredibly Affordable</StickyHighlight>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>No subscriptions</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>6 triggers + 11 actions</span>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] py-16" style={{ color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "#ffffff" }}>
                <img src="/telesync-icon.svg" alt="TeleSync" className="w-7 h-7 rounded" /> TeleSync
              </h3>
              <p style={{ color: "#9ca3af" }}>
                Telegram integration for GoHighLevel.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Product</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li>
                  <a href="#features" className="hover:opacity-80 transition-opacity">Features</a>
                </li>
                <li>
                  <a href="#triggers-actions" className="hover:opacity-80 transition-opacity">Triggers &amp; Actions</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-80 transition-opacity">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">Changelog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Support</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">Help Center</a>
                </li>
                <li>
                  <a href={CALENDAR_URL} target="_blank" className="hover:opacity-80 transition-opacity">Book a Call</a>
                </li>
                <li>
                  <a href="mailto:hello@vaultsuite.store" className="hover:opacity-80 transition-opacity">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Legal</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">Terms</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">GDPR</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: "#9ca3af" }}>
              &copy; 2026 TeleSync. Telegram Integration for GoHighLevel.
            </p>
            <p className="flex items-center gap-2" style={{ color: "#9ca3af" }}>
              🔒 Your data stays yours. We never store message content.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
