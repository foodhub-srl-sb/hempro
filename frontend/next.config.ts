import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Supabase Storage - aggiornare <project-ref> con il ref del nuovo progetto
        // Trovato in: Supabase Dashboard > Settings > General > Reference ID
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
