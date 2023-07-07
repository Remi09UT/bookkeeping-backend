import { useEffect, useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import tranGenerator from "../fake_data/tranGenerator";
import Table from "./Table";
import Modal from "./Modal";
import LoginPage from "./LoginPage";
import URL from "../config/URLConfig";

function Home() {
  const [img, setImg] = useState(null);

  // fake transactions for testing only
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    let fakeData = tranGenerator();
    setTransactions(fakeData);
  }, []);

  return (
    <div className="App">
      <Title transactions={transactions} />
      <UploadForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Table setImg={setImg} />
      {img && <Modal src={img} setImg={setImg} />}
    </div>
  );
}

export default Home;
