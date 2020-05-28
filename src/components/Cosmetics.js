import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import firestore from "../firebaseConfig";

class Cosmetics extends React.Component {
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
      .where("p_type", "==", "cosmetics")
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
    const { dataList, searchValue } = this.state;

    return (
      <div>
        <div className="icon">
          <input type="text" value={searchValue} onChange={this._valueChange} />
          <SearchIcon onClick={() => this._SearchHanDler()} />
        </div>

        <div className="boxs">
          {dataList.length === 0 ? (
            <div>조회된 데이터가 없습니다.</div>
          ) : (
            dataList.map((data, idx) => {
              return (
                <div className="productBox" key={idx}>
                  <img src={data.imagePath} width="230" height="230" />
                  <div className="p_name">{data.p_name}</div>
                  <div className="p_price">{data.p_price}원</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
  _SearchHanDler = async () => {
    let productList = new Array();
    await firestore
      .collection("products")
      .where("p_name", "==", this.state.searchValue)
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
  _valueChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };
}

export default Cosmetics;
