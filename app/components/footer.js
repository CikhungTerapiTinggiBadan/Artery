export default function Footer({ text = "Footer" }) {
  return (
    <footer className="bg-[#463528] text-white py-12 flex justify-center items-center">
      <p className="text-lg">{text}</p>
    </footer>
  );
}