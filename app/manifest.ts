import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Edriva Global",
		short_name: "Edriva",
		description: "Your Gateway to Global Education",
		start_url: "/",
		display: "standalone",
		background_color: "#f7f9fc",
		theme_color: "#041f3d",
	};
}
