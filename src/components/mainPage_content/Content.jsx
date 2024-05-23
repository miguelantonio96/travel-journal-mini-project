import "./content.css";

export default function PageContent(item) {
  return (
    <div className="content">
      <img src={item.imgURL} alt={item.title} />
      <article className="item-container">
        <div className="item-location">
          <img
            src="public/location_on_24dp_FILL0_wght400_GRAD0_opsz24.png"
            alt="location icon"
          />
          <h2>{item.location}</h2>
          <a target="_blank" href={item.mapGoogleLink}>
            {item.mapLink}
          </a>
        </div>
        <h1 className="title">{item.title.toUpperCase()}</h1>
        
        <p className="description">{item.description}</p>
      </article>
    </div>
  );
}
