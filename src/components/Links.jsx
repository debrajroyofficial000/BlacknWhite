import Link from "./Link";

function Links() {
  const links = [
    { id: 1, url: "https://github.com/debrajroyofficial000", text: "Github" },
    { id: 2, url: "https://twitter.com/DebrajR57997", text: "Twitter" },
    {
      id: 3,
      url: "https://www.linkedin.com/in/debraj-roy-a08854299/",
      text: "LinkedIn",
    },
    { id: 4, url: "https://dev.to/debrajroyofficial000", text: "Devto" },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link key={link.id} url={link.url} text={link.text} />
      ))}
    </div>
  );
}
export default Links;
