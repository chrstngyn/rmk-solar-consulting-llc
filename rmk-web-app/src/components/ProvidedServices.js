import React from 'react'

export default function ProvidedServices({ title, subtitle1, p1, subtitle2, p2, subtitle3, p3,
                                         subtitle4, p4, subtitle5, p5, subtitle6, p6, subtitle7,
                                             p7, dark, id}) {
    return (
      <div className={"section" + (dark ? "section-dark" : "")}>
          <div className="section-content" id={id}>
              <h1>{title}</h1>

              <h2>{subtitle1}</h2>
              <p>{p1}</p>

              <h2>{subtitle2}</h2>
              <p>{p2}</p>

              <h2>{subtitle3}</h2>
              <p>{p3}</p>

              <h2>{subtitle4}</h2>
              <p>{p4}</p>

              <h2>{subtitle5}</h2>
              <p>{p5}</p>

              <h2>{subtitle6}</h2>
              <p>{p6}</p>

              <h2>{subtitle7}</h2>
              <p>{p7}</p>
          </div>
      </div>
    );
}