import React from "react";
import firestore from "../firebaseConfig";

class Clothing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }

  componentDidMount = async () => {
    let productList = new Array();
    await firestore
      .collection("products")
      .where("p_type", "==", "clothing")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          productList.push({
            imagePath: doc.data().imagePath,
            p_name: doc.data().p_name,
            p_price: doc.data().p_price,
          });

          this.setState({
            dataList: productList,
          });
        });
      });
  };
  render() {
    const { dataList } = this.state;

    return (
      <div>
        {dataList.length === 0 ? (
          <div>조회된 데이터가 없습니다.</div>
        ) : (
          dataList.map((data, idx) => {
            return (
              <div className="productBox" key={idx}>
                <img src={data.imagePath} width="200" height="200" />
                <div>{data.p_name}</div>
                <div>{data.p_price}원</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Clothing;
