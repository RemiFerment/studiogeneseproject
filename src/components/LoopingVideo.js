import React, { useEffect, useRef, useState } from "react";

// 🔁 Composant prêt à l'emploi pour lire une vidéo en boucle en React
// - Autoplay fiable (Chrome, Safari iOS/Android) grâce à muted + playsInline
// - Relance programmatique si l'autoplay est bloqué
// - Petits logs d'état pour déboguer
// - Bouton de secours "Lancer la vidéo" si l'utilisateur doit interagir

export default function LoopingVideo({
    src = "/videos/demo.mp4", // ← mets ton chemin/URL
    poster,
    className = "w-full max-w-2xl rounded-2xl shadow-lg",
    style,
}) {
    const videoRef = useRef(null);
    const [ready, setReady] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [error, setError] = useState("");

    // Essaye de lancer la vidéo dès que possible
    const tryPlay = async () => {
        const el = videoRef.current;
        if (!el) return;
        try {
            const p = el.play();
            // Certains navigateurs retournent une Promise
            if (p && typeof p.then === "function") await p;
            setPlaying(!el.paused);
            setError("");
            // Petit log discret pour débogage
            console.debug("▶️ Video playing:", {
                paused: el.paused,
                muted: el.muted,
                readyState: el.readyState,
                currentTime: el.currentTime,
            });
        } catch (e) {
            // Échec d'autoplay (souvent faute d'interaction utilisateur)
            console.warn("Autoplay bloqué ou erreur de lecture:", e);
            setError(
                "Autoplay bloqué par le navigateur. Clique sur le bouton pour lancer la vidéo."
            );
            setPlaying(false);
        }
    };

    useEffect(() => {
        // Lorsque la source change, tente de jouer
        tryPlay();
    }, [src]);

    const onLoadedData = () => {
        setReady(true);
        // Dès que possible, retente le play (certains browsers exigent loadeddata)
        tryPlay();
    };

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = (e) => {
        const mediaErr = e?.target?.error;
        setError(
            mediaErr?.message ||
            "Impossible de lire la vidéo (vérifie le chemin, le CORS et le type MIME)."
        );
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                // ⚠️ Indispensables pour l'autoplay mobile
                muted
                playsInline
                // Autoplay + loop
                autoPlay
                loop
                // Astuces de perf/compat
                preload="auto"
                controls={false}
                className={className}
                style={style}
                onLoadedData={onLoadedData}
                onPlay={onPlay}
                onPause={onPause}
                onError={onError}
            />
        </div>
    );
}
