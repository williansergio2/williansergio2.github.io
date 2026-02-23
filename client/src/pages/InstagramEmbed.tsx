import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DUYJPnKjuwU/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          borderRadius: "12px",
          maxWidth: "540px",
          width: "100%",
        }}
      ></blockquote>
    </div>
  );
}