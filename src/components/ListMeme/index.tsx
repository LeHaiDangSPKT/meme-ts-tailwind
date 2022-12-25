import React from "react";
import Axios from "axios";
import Cart from "../Cart";
import { Meme } from "../interface";

const Index = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listMeme, setListMeme] = React.useState<Meme[]>([]);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        setLoading(true);
        setListMeme(res.data.data.memes);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <div className="grid md:grid-cols-4 gap-4">
          {listMeme.map((item) => {
            return (
              <Cart
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.url}
              />
            );
          })}{" "}
        </div>
      ) : (
        <div className="md:text-4xl text-center">Loading...</div>
      )}
    </>
  );
};
export default Index;
