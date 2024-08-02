// components/TypedText.js
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Our team of experienced developers and designers is passionate about delivering top-notch web solutions tailored to your unique needs.",
        "With years of experience in the industry, we understand the importance of a strong online presence. We work closely with our clients to understand their goals and provide customized web development services that drive results.",
        "Whether you need a new website, a redesign, or ongoing maintenance, we&apos;re here to help. Let&apos;s work together to create awebsite that not only looks great but also performs exceptionally well.",
      ],
      typeSpeed: 0,
      loop: true,
      backSpeed: 0,
      //   backDelay: 700,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      className="js-text-animation text-4xl font-extrabold"
      ref={typedElement}
    ></span>
  );
};

export default TypedText;
