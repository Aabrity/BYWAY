export default function Card({ children, imageSrc, ...props }) {
    return (
      <div {...props} className="relative max-w-xs overflow-hidden shadow-lg group">
        <div className="relative">
          <img src={imageSrc} alt="" className="transition-transform group-hover:scale-110" />
          <div className="absolute inset-0 flex items-end bg-gradient-to-b from-blue-950/60 to-transparent">
            
          </div>
        </div>
        <div className="p-4 bg-slate-300 text-black">{children}</div>
      </div>
    );
  }

// export default function Card({ children, imageSrc, ...props }) {
//   return (
//     <div {...props} className="relative max-w-xs overflow-hidden shadow-lg group">
//       <img src={imageSrc} alt="" className="transition-transform group-hover:scale-110" />

//       <div className="absolute inset-0 flex items-end bg-gradient-to-b from-black/60 to-transparent">
//         <div className="p-4 text-white">{children}</div>
//       </div>
//     </div>
//   );
// }

  