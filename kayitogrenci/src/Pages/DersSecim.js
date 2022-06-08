import  { useState } from "react";
import React from 'react';
function DersSecim(props){
  const [userinfo, setUserInfo] = useState({
    dersler: [],
    response: [],
  });
  
    
  

  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    const { dersler } = userinfo;
        
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        dersler: [...dersler, value],
        response: [...dersler, value],
      });
    }
    
      // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        dersler: dersler.filter((e) => e !== value),
        response: dersler.filter((e) => e !== value),
      });
    }
  }
    
  return(
    
    <div>
    <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check m-3">
              <input type='checkbox' name='dersler' value='turkce'id='turkce' placeholder='Türkçe'
              onChange={handleOnChange}/>
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
              TÜRKÇE        
              </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='matematik' name='dersler' id='mat'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            MATEMATİK       
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='ingilizce' name='dersler' id='ingilizce'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            İNGİLİZCE       
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='nesneye yönelik programlama'name='dersler' id='nyp'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            NESNEYE YÖNELİK PROGRAMLAMA       
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='web'name='dersler' id='web'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            WEB PROGRAMLAMA      
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='cprog'name='dersler' id='cprog'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            C PROGRAMLAMA      
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='lab'name='dersler' id='lab'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            LABORATUVAR      
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='bilag'name='dersler' id='bilag'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            BİLGİSAYAR AĞLARI       
            </label>
          </div>
          <div className="form-check m-3">
            <input type='checkbox'value='isletim'name='dersler' id='isletim'
            onChange={handleOnChange}/>
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
            İŞLETİM SİSTEMLERİ       
            </label>
          </div>
          <br/>
          <br/>
          <br/>
          
          </div>
      </div >
        
          <div className="form-floating mt-3 mb-3 text-center">
          <label htmlFor="exampleFormControlTextarea1">
            SEÇİLEN DERSLER :{" "}
          </label>
          <div>
          <br/>
          <br/>
          <textarea 
            className="col-md-12 col-xa-6 col-sm-4"
            name="response"
            value={
              userinfo.response}
            
            id="floatingTextarea2"
            style={{ width:"600px" ,height: "150px" ,rows:"50"}}
            onChange={handleOnChange}
            
          ></textarea>
          </div>
          </div>
         
    </form>    
      
        
        
    </div>    
    );
    
}
export default DersSecim;