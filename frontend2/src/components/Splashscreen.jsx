// import React, { useEffect, useState } from 'react';

// const SplashScreen = () => {
//   const [startAnimation, setStartAnimation] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setStartAnimation(true);
//     }, 1000);
//   }, []);

//   return (
//     <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
//       {/* Original hola with separated letters */}
//       <h1
//         className="text-purple-400 text-9xl font-bold tracking-tight"
//         style={{ fontFamily: 'fantasy' }}
//       >
//         <span className={`inline-block ${startAnimation ? 'animate-scale-h' : ''}`}>h</span>
//         <span className={`inline-block ${startAnimation ? 'animate-move-o' : ''}`}>o</span>
//         <span className={`inline-block ${startAnimation ? 'animate-move-l' : ''}`}>l</span>
//         <span className={`inline-block ${startAnimation ? 'animate-move-a' : ''}`}>a'</span>
//       </h1>

//       {/* Upper holafades */}
//       <h1
//         className={`absolute text-8xl text-violet-300 text-bold font-light tracking-normal ${startAnimation ? 'animate-move-up' : 'opacity-0'
//           }`}
//         style={{ fontFamily: 'fantasy' }}
//       >
//         hola<span class="inline-block -rotate-12">'</span>

//       </h1>

//       {/* Lower holafades */}
//       <h1
//         className={`absolute text-8xl text-violet-300 font-light tracking-normal ${startAnimation ? 'animate-move-down' : 'opacity-0'
//           }`}
//         style={{ fontFamily: 'fantasy' }}
//       >
//         hola'
//       </h1>

//       <style>{`
//         @keyframes moveUp {
//           0% {
//             opacity: 0;
//             transform: translate(0, 0);
//           }
//           20% {
//             opacity: 1;
//             transform: translate(0, -100px);
//           }
//           80% {
//             opacity: 1;
//             transform: translate(-200px, -100px);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-200px, -100px);
//           }
//         }

//         @keyframes moveDown {
//           0% {
//             opacity: 0;
//             transform: translate(0, 0);
//           }
//           20% {
//             opacity: 1;
//             transform: translate(0, 100px);
//           }
//           80% {
//             opacity: 1;
//             transform: translate(200px, 100px);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(200px, 100px);
//           }
//         }

//         @keyframes scaleH {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.5);
//           }
//           100% {
//             transform: scale(1.5) translateX(-1rem);
//           }
//         }

//         @keyframes moveO {
//           0%, 80% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(1rem);
//           }
//         }

//         @keyframes moveL {
//           0%, 80% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(2rem);
//           }
//         }

//         @keyframes moveA {
//           0%, 80% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(3rem);
//           }
//         }

//         .animate-move-up {
//           animation: moveUp 3s forwards;
//         }

//         .animate-move-down {
//           animation: moveDown 3s forwards;
//         }

//         .animate-scale-h {
//           animation: scaleH 3s 2s forwards;
//         }

//         .animate-move-o {
//           animation: moveO 3s 2s forwards;
//         }

//         .animate-move-l {
//           animation: moveL 3s 2s forwards;
//         }

//         .animate-move-a {
//           animation: moveA 3s 2s forwards;
//         }
//           @media (max-width: 768px) {
//   @keyframes moveUp {
//     0% {
//       opacity: 0;
//       transform: translate(0, 0);
//     }
//     20% {
//       opacity: 1;
//       transform: translate(0, -50px); /* Reduced translation */
//     }
//     80% {
//       opacity: 1;
//       transform: translate(-100px, -50px); /* Adjusted movement */
//     }
//     100% {
//       opacity: 0;
//       transform: translate(-100px, -50px);
//     }
//       }
//       }
//       @media (max-width: 480px) {
//   @keyframes moveDown {
//     0% {
//       opacity: 0;
//       transform: translate(0, 0);
//     }
//     20% {
//       opacity: 1;
//       transform: translate(0, 50px); /* Reduced translation */
//     }
//     80% {
//       opacity: 1;
//       transform: translate(100px, 50px); /* Adjusted movement */
//     }
//     100% {
//       opacity: 0;
//       transform: translate(100px, 50px);
//     }
//   }
//       }
//   @media (max-width: 768px) {
//   .animate-move-up,
//   .animate-move-down,
//   .animate-scale-h,
//   .animate-move-o,
//   .animate-move-l,
//   .animate-move-a {
//     animation-duration: 2s; /* Shorter duration */
//   }
// .splashScreen {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #000;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: 1;
//   transition: opacity 1s ease-out;
// }
// .splashScreen.fade-out {
//   opacity: 0;
// }

// }
//       `}</style>
//     </div>
//   );
// };

// export default SplashScreen;

import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start the animations
    setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    // Trigger fade-out after animations are complete
    setTimeout(() => {
      setFadeOut(true);
    }, 8000); 
  }, []);

  return (
    <div
      className={`h-screen w-full bg-black flex items-center justify-center overflow-hidden relative transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Original hola with separated letters */}
      <h1
        className="text-purple-400 text-9xl font-bold tracking-tight"
        style={{ fontFamily: 'fantasy' }}
      >
        <span className={`inline-block ${startAnimation ? 'animate-scale-h' : ''}`}>h</span>
        <span className={`inline-block ${startAnimation ? 'animate-move-o' : ''}`}>o</span>
        <span className={`inline-block ${startAnimation ? 'animate-move-l' : ''}`}>l</span>
        <span className={`inline-block ${startAnimation ? 'animate-move-a' : ''}`}>a'</span>
      </h1>

      {/* Upper holafades */}
      <h1
        className={`absolute text-8xl text-violet-300 text-bold font-light tracking-normal ${
          startAnimation ? 'animate-move-up' : 'opacity-0'
        }`}
        style={{ fontFamily: 'fantasy' }}
      >
        hola<span className="inline-block -rotate-12">'</span>
      </h1>

      {/* Lower holafades */}
      <h1
        className={`absolute text-8xl text-violet-300 font-light tracking-normal ${
          startAnimation ? 'animate-move-down' : 'opacity-0'
        }`}
        style={{ fontFamily: 'fantasy' }}
      >
        hola'
      </h1>

      <style>{`
        @keyframes moveUp {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 1;
            transform: translate(0, -100px);
          }
          80% {
            opacity: 1;
            transform: translate(-200px, -100px);
          }
          100% {
            opacity: 0;
            transform: translate(-200px, -100px);
          }
        }

        @keyframes moveDown {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          20% {
            opacity: 1;
            transform: translate(0, 100px);
          }
          80% {
            opacity: 1;
            transform: translate(200px, 100px);
          }
          100% {
            opacity: 0;
            transform: translate(200px, 100px);
          }
        }

        @keyframes scaleH {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1.5) translateX(-1rem);
          }
        }

        @keyframes moveO {
          0%, 80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(1rem);
          }
        }

        @keyframes moveL {
          0%, 80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(2rem);
          }
        }

        @keyframes moveA {
          0%, 80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(3rem);
          }
        }

        .animate-move-up {
          animation: moveUp 3s forwards;
        }

        .animate-move-down {
          animation: moveDown 3s forwards;
        }

        .animate-scale-h {
          animation: scaleH 3s 2s forwards;
        }

        .animate-move-o {
          animation: moveO 3s 2s forwards;
        }

        .animate-move-l {
          animation: moveL 3s 2s forwards;
        }

        .animate-move-a {
          animation: moveA 3s 2s forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
