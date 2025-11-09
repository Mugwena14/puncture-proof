// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.05)", opacity: "0.85" },
        },
      },
      animation: {
        pop: "pop 5s ease-in-out infinite",
      },
    },
  },
};
