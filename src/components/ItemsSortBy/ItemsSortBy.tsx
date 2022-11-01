const ItemsSortBy = () => {
  return (
    <div className="d-none d-lg-block col-lg-6">
      <div className="row align-items-center p-3">
        <div className="col-lg-8 text-end">
          <label className="form-label m-0" htmlFor="sortby">
            Sort by
          </label>
        </div>
        <div className="col-lg-4">
          <label className="visually-hidden" htmlFor="sortby">
            Sort-by
          </label>
          <select
            className="form-select"
            name="sortby"
            id="sortby"
            defaultValue="Featured"
          >
            <option value="Featured">Featured</option>
            <option value="Low to high">Low to high</option>
            <option value="High to low">High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ItemsSortBy;
