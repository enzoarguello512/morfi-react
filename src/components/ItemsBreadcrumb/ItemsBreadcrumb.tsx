const ItemsBreadcrumb = () => {
  return (
    <div className="col-12 col-lg-6">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb m-0 p-3">
          <li className="breadcrumb-item">
            <a href="/">Condiments</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/">Example</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Text
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ItemsBreadcrumb;
