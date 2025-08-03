export default function Privacy() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We only collect essential information required to manage your tasks, such as your email and saved task data.
          No unnecessary personal information is stored.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Data Storage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          All data is stored securely in our database and only accessible by authenticated users.
          We do not store passwords in plain text they are hashed using strong encryption.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Third-Party Sharing</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your data is never sold or shared with third parties.
          We do not use advertising or tracking cookies in this application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Control</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You are in full control of your data. You may delete tasks at any time, and they will be permanently removed from our servers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or concerns about privacy, please reach out via the <strong>Contact</strong> page.
        </p>
      </section>
    </div>
  );
}
