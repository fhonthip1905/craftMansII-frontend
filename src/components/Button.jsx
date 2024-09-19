/* eslint-disable react/prop-types */
export default function Button({bg,children}) {

  return <button type="button" className={`btn btn-outline-warning btn-block btn-outline-yellow ${bg}`}>{children}</button>;
}
