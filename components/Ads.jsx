import React, { useEffect, useRef } from "react";

const Ads = () => {
  const banner = useRef();
  useEffect(() => {
    if (!banner.current.firstChild) {
      const conf = document.createElement(`<script
            async="async"
            data-cfasync="false"
            src="//pl17169513.safestgatetocontent.com/5d84192ff9af6fbe751dc69ae3bb81fa/invoke.js"
          ></script>`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//pl17169538.safestgatetocontent.com/86/b9/92/86b99238b4c0b87bd7e7a2642391327c.js";

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);
  return (
    <div>
      <script
        async="async"
        data-cfasync="false"
        src="//pl17169513.safestgatetocontent.com/5d84192ff9af6fbe751dc69ae3bb81fa/invoke.js"
      ></script>
      <script
        type="text/javascript"
        src="//pl17169538.safestgatetocontent.com/86/b9/92/86b99238b4c0b87bd7e7a2642391327c.js"
      ></script>
      <div ref={banner}></div>
    </div>
  );
};

export default Ads;
