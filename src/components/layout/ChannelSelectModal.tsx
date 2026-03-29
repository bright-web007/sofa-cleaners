'use client'

import { useState } from 'react'
import { MessageCircle, Send, MessagesSquare } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { WHATSAPP_NUMBER, TELEGRAM_BOT } from '@/lib/constants'

interface ChannelSelectModalProps {
  isOpen: boolean
  onClose: () => void
  message?: string
  prefilledMessage?: string
  prefillMessage?: string
  cityName?: string
  cleanerName?: string
}

export function ChannelSelectModal({
  isOpen,
  onClose,
  message = '',
  prefilledMessage,
  prefillMessage,
  cityName,
  cleanerName,
}: ChannelSelectModalProps) {
  const initialMessage = prefilledMessage ?? prefillMessage ?? message
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'telegram' | 'webchat' | null>(null)
  const [customMessage, setCustomMessage] = useState(initialMessage)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you with your sofa cleaning needs today?' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleChannelSelect = (channel: 'whatsapp' | 'telegram' | 'webchat') => {
    setSelectedChannel(channel)
  }

  const handleWhatsApp = () => {
    const lead = cleanerName
      ? `Hi, I'd like a quote from ${cleanerName}. `
      : cityName
      ? `Hi, I'm looking for sofa cleaning in ${cityName}. `
      : ''
    const text = `${lead}${customMessage || 'Hi, I would like to get a quote for sofa cleaning.'}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const handleTelegram = () => {
    const lead = cleanerName
      ? `Hi, I'd like a quote from ${cleanerName}. `
      : cityName
      ? `Hi, I'm looking for sofa cleaning in ${cityName}. `
      : ''
    const text = `${lead}${customMessage || 'Hi, I would like to get a quote for sofa cleaning.'}`
    const telegramUrl = `https://t.me/${TELEGRAM_BOT}?start=${encodeURIComponent(text)}`
    window.open(telegramUrl, '_blank')
    onClose()
  }

  const handleSendChatMessage = () => {
    if (!newMessage.trim()) return
    
    setChatMessages(prev => [
      ...prev,
      { type: 'user', text: newMessage },
      { type: 'bot', text: 'Thanks for your message! A member of our team will respond shortly. For immediate assistance, please use WhatsApp or call us directly.' }
    ])
    setNewMessage('')
  }

  const channelOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Get instant responses via WhatsApp',
      icon: MessageCircle,
      color: 'btn-whatsapp',
      action: handleWhatsApp
    },
    {
      id: 'telegram', 
      title: 'Telegram',
      description: 'Chat with us on Telegram',
      icon: Send,
      color: 'btn-telegram',
      action: handleTelegram
    },
    {
      id: 'webchat',
      title: 'Web Chat',
      description: 'Chat right here on our website',
      icon: MessagesSquare,
      color: 'btn-primary',
      action: () => handleChannelSelect('webchat')
    }
  ]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={selectedChannel === 'webchat' ? 'Chat with us' : 'Get in Touch'}
      className="max-w-lg"
    >
      {selectedChannel === 'webchat' ? (
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 max-h-80 overflow-y-auto">
            <div className="space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-xl text-sm font-medium shadow-sm ${
                      msg.type === 'user'
                        ? 'bg-primary-700 text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendChatMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Button size="sm" onClick={handleSendChatMessage}>
              Send
            </Button>
          </div>
          
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedChannel(null)}
            >
              ← Back to options
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-gray-600">
            Choose your preferred way to connect with us. Get instant responses and book your cleaner in minutes!
          </p>

          {initialMessage && (
            <div className="space-y-3">
              <Textarea
                label="Your message (optional)"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Tell us about your sofa cleaning needs..."
                rows={3}
              />
            </div>
          )}

          <div className="grid gap-4">
            {channelOptions.map((option) => (
              <button
                key={option.id}
                onClick={option.action}
                className="flex items-start p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-colors text-left group"
              >
                <div className="flex-shrink-0 p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                  <option.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}
