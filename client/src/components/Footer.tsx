const Footer =()=>{
    return(
        <div className="p-[50px] bg-black flex flex-col lg:flex-row border-t-[10px] border-red-600 m-auto justify-center">
            <div className="text-white w-[30%]">
                <h1 className="text-[20px] border-l-[3px] border-[crimson] pl-[10px]">KONTAKT</h1>
                <p className=" text-[17px] w-[80%]">Zespół Szkół Technicznych
                i Ogólnokształcących im. Stefana Banacha
                w Jarosławiu</p>
                <h2 className=" font-semibold">Adres:</h2>
                <p>
                ul. Św. Ducha 1A
                37-500 Jarosław
                </p>
                <h2 className=" font-semibold">Telefon:</h2>
                <p>
                tel: 16 621 65 24 <br/>
                fax: 16 730 14 50
                </p>
                    <h2 className=" font-semibold">E-mail:</h2>
                <p>szkola@zstiojar.edu.pl</p>
            </div>
            {/* <div className="text-white w-[30%]">
                <h1 className="text-[20px] border-l-[3px] border-[crimson] pl-[10px]">ARCHIWUM</h1>
                <p>marzec 2023<br/>
                luty 2023<br/>
                styczeń 2023</p>
            </div> */}
            <div className="text-white">
                <h1 className="text-[20px] border-l-[3px] border-[crimson] pl-[10px]">MAPA</h1>
                <iframe
				title="yo"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.6776108412885!2d22.678653387022138!3d50.01709389844757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c9bda79d56527%3A0x5eaeb3e6060f7c83!2zWmVzcMOzxYIgU3prw7PFgiBUZWNobmljem55Y2ggaSBPZ8OzbG5va3N6dGHFgmPEhWN5Y2ggaW0uIFN0ZWZhbmEgQmFuYWNoYQ!5e0!3m2!1spl!2spl!4v1670121725943!5m2!1spl!2spl"
				width="500"
				height="260"
				style={{ marginLeft: "50px", border: "0" }}
				loading="lazy"
                className="mt-[20px]"
			/>
            </div>
        </div>
    )
}

export default Footer;