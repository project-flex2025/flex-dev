import AuthProvider from "./components/SessionProvider";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient"; // Client-side Bootstrap
import JQueryLoader from "./components/JQueryLoader"; // Client-side jQuery Loader
import ClientLayout from "./components/ClientLayout"; // NEW client component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AuthProvider>
          <BootstrapClient />
          <JQueryLoader />
          {/* Move layout handling to a separate client component */}
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
