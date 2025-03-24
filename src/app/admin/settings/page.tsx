"use client"

import type React from "react"

import { useState } from "react"

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "News Portal",
    siteDescription: "Your source for the latest news and updates",
    siteUrl: "https://news-portal.example.com",
    contactEmail: "contact@example.com",
    articlesPerPage: "10",
  })

  const [socialSettings, setSocialSettings] = useState({
    facebook: "https://facebook.com/newsportal",
    twitter: "https://twitter.com/newsportal",
    instagram: "https://instagram.com/newsportal",
    youtube: "",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    newArticleEmail: true,
    newCommentEmail: true,
    weeklyDigest: false,
    marketingEmails: false,
  })

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSocialSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save these settings to your backend
    alert("General settings saved!")
  }

  const handleSocialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save these settings to your backend
    alert("Social media settings saved!")
  }

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save these settings to your backend
    alert("Notification settings saved!")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <form onSubmit={handleGeneralSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                Site Name
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.siteName}
                onChange={handleGeneralChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-700">
                Site URL
              </label>
              <input
                type="url"
                id="siteUrl"
                name="siteUrl"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.siteUrl}
                onChange={handleGeneralChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
              Site Description
            </label>
            <textarea
              id="siteDescription"
              name="siteDescription"
              rows={3}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={generalSettings.siteDescription}
              onChange={handleGeneralChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.contactEmail}
                onChange={handleGeneralChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="articlesPerPage" className="block text-sm font-medium text-gray-700">
                Articles Per Page
              </label>
              <input
                type="number"
                id="articlesPerPage"
                name="articlesPerPage"
                min="5"
                max="50"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.articlesPerPage}
                onChange={handleGeneralChange}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save General Settings
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Social Media</h2>
        <form onSubmit={handleSocialSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                Facebook
              </label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={socialSettings.facebook}
                onChange={handleSocialChange}
                placeholder="https://facebook.com/yourpage"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                Twitter
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={socialSettings.twitter}
                onChange={handleSocialChange}
                placeholder="https://twitter.com/yourhandle"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                Instagram
              </label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={socialSettings.instagram}
                onChange={handleSocialChange}
                placeholder="https://instagram.com/yourprofile"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
                YouTube
              </label>
              <input
                type="url"
                id="youtube"
                name="youtube"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={socialSettings.youtube}
                onChange={handleSocialChange}
                placeholder="https://youtube.com/yourchannel"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save Social Media Settings
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <form onSubmit={handleNotificationSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newArticleEmail"
                name="newArticleEmail"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notificationSettings.newArticleEmail}
                onChange={handleNotificationChange}
              />
              <label htmlFor="newArticleEmail" className="ml-2 block text-sm text-gray-700">
                Email notification when a new article is published
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="newCommentEmail"
                name="newCommentEmail"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notificationSettings.newCommentEmail}
                onChange={handleNotificationChange}
              />
              <label htmlFor="newCommentEmail" className="ml-2 block text-sm text-gray-700">
                Email notification when a new comment is posted
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="weeklyDigest"
                name="weeklyDigest"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notificationSettings.weeklyDigest}
                onChange={handleNotificationChange}
              />
              <label htmlFor="weeklyDigest" className="ml-2 block text-sm text-gray-700">
                Weekly digest of popular articles
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketingEmails"
                name="marketingEmails"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={notificationSettings.marketingEmails}
                onChange={handleNotificationChange}
              />
              <label htmlFor="marketingEmails" className="ml-2 block text-sm text-gray-700">
                Receive marketing and promotional emails
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save Notification Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

