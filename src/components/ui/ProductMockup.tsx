export function ProductMockup() {
  return (
    <div className="relative">
      <div className="bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] overflow-hidden w-[540px]">
        {/* Title bar */}
        <div className="bg-gray-100 border-b-2 border-black px-5 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-green-400 border border-black/20" />
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-500">
            TeleSync
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-5 pt-4 pb-3 bg-[#f9fafb]">
          <div className="inline-flex gap-1 bg-[#f3f4f6] rounded-[10px] p-[3px]">
            <div
              className="px-5 py-1.5 rounded-lg text-xs font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #0088CC 0%, #00B4D8 100%)" }}
            >
              Connection
            </div>
            <div className="px-5 py-1.5 rounded-lg text-xs font-medium text-gray-500">
              Automation
            </div>
            <div className="px-5 py-1.5 rounded-lg text-xs font-medium text-gray-500">
              Support
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 bg-[#f9fafb]">
          {/* Bot Status Card */}
          <div
            className="rounded-xl p-4 mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #0088CC 0%, #00B4D8 100%)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm">Telegram Bot Connected</div>
                  <div className="text-xs opacity-90">@Testbot15454_bot</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20">
                Active
              </span>
            </div>
          </div>

          {/* Section label */}
          <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 pl-0.5">
            Triggers
          </div>

          {/* Triggers */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-3">
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-lg">
                  💬
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">New Message Received</div>
                  <div className="text-[10px] text-gray-400">Fires when a contact messages your bot</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">
                ON
              </span>
            </div>
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-lg">
                  🚀
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Bot Started (/start)</div>
                  <div className="text-[10px] text-gray-400">New user starts your Telegram bot</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">
                ON
              </span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-lg">
                  📸
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Media Received</div>
                  <div className="text-[10px] text-gray-400">Photo, video, or document sent to bot</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">
                ON
              </span>
            </div>
          </div>

          {/* Section label */}
          <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 pl-0.5">
            Actions
          </div>

          {/* Actions */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-lg">
                  📤
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Send Telegram Message</div>
                  <div className="text-[10px] text-gray-400">Auto-reply from GHL workflows</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                ACTION
              </span>
            </div>
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-lg">
                  👥
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">Send to Group</div>
                  <div className="text-[10px] text-gray-400">Broadcast to Telegram groups</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                ACTION
              </span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-lg">
                  😀
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">React with Emoji</div>
                  <div className="text-[10px] text-gray-400">Add emoji reactions to messages</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                ACTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
