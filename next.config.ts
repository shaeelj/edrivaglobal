import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Generate a static export suitable for static hosting (e.g., Hostinger)
	output: "export",
	images: {
		// Disable Next.js image optimization for static export
		unoptimized: true,
	},
};

export default nextConfig;
