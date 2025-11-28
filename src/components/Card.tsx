import QRCode from "../assets/image-qr-code.png"

export function Card() {
  return (
    <article className="w-80 px-4 pt-4 pb-10 rounded-[1.25rem] bg-white gap-6 flex flex-col">
      <img src={QRCode} className="w-2xs h-2xs rounded-[0.625rem]" alt="Scanable QR code" />
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-slate-900 text-[1.375rem]/[120%] tracking-normal text-center font-bold">Improve your front-end <br />skills by building projects</h2>
        <p className="text-slate-500 text-[0.938rem]/[140%] tracking-[0.2px] text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </article>
  )
}