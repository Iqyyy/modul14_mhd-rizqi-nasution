import  {useState } from "react";
import './about.css'
import gambar from "./gambar.png";

function About(){
     const [me, setMe] = useState({
        name: "Mhd Rizqi Nasution",
        nickname: "Rizqi",
        nim: "320200401013",
        univ: "Universitas Pertahanan Republik Indonesia",
        role: "Mahasiswa",
     })

    return (
        <>
              <section class="about_section" id="About">
                <div class="about_img">
                    <img src={gambar}  alt="Iqy"></img>
                </div>
                <div class="about_details">
                    <h1>About Me</h1>
                    <p> Hai saya  {me.name}, anda bisa memanggil saya dengan panggilan {me.nickname}. Saya seorang {me.role} di kampus {me.univ}. Senang bisa berkenalan dengan kalian semua, terimakasih telah mengunjungi halaman ini. salam hangat {me.nickname} </p>
                </div>
            </section>
        </>
    )
}

export default About;