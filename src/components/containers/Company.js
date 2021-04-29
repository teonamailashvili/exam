import { useEffect, useState } from "react";

export default function Company() {
  const [companies, setCompany] = useState([]);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    fetch(`https://fakerapi.it/api/v1/companies?_quantity=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setCompany(res.data);
      });
  }, [limit]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
            <input
              className="form-control"
              value={keyword}
              placeholder="Enter search keyword"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          {companies.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <div className="card-text">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.vat}</p>
                    <p>{item.phone}</p>
                    <p>{item.country}</p>
                    <p>
                      <a href={item.website} target="_blank">
                        Website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <select
            className="form-control"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
