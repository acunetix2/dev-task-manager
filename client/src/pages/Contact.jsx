export default function Contact() {
  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Contact Us</h1>

      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We’d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
      </p>

      {/* Contact Card */}
      <div className="rounded-2xl shadow-lg p-6 md:p-8 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200 dark:border-zinc-700 transition hover:shadow-2xl space-y-6">
        
        {/* Email Section */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-1">Email</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <a
              href="mailto:info@phantompowerdevs.org"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              info@phantompowerdevs.org
            </a>
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-1">Office Address</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Phantom Power Devs Headquarters</strong><br />
            Third Floor, Innovation Tower,<br />
            Nairobi Technology Park, Waiyaki Way,<br />
            Westlands District, Postal Code 40718-00100,<br />
            Nairobi, Kenya.<br />
            Phone: +254 712 012 780
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-700 shadow-md">
          <iframe
            title="Phantom Power Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.265635222863!2d36.7792409!3d-1.2653845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a774cf4e169%3A0x681fe4ff17476dc!2sNairobi%20Garage%20Spring%20Valley!5e0!3m2!1sen!2ske!4v1690321041876!5m2!1sen!2ske"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-2">Social Media</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="https://twitter.com/devtaskmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devtaskmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/devtaskmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        We typically respond within 24–48 hours. Thank you for using Task Manager!
      </p>
    </div>
  );
}
