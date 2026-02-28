export default function ThemeToggle() {
  function toggle() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button onClick={toggle} className="text-sm text-gray-400 hover:text-white">
      Toggle Theme
    </button>
  );
}
