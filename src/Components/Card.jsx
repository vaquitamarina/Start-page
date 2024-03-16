import { useEffect } from "react";
export function Card({ title, href, children, keyId }) {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key == keyId) {
        window.open(href, "_blank");
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <a className="card" target="_blank" href={href}>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </a>
  );
}
