function Link({ url, text }) {
  return (
    <div className={`link `}>
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
}
export default Link;
