import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
 
  imagem = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
  imagem2 = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";

  visible = true;

  escondeEmpresa(){
    this.visible = !this.visible;
    }

  trocarImagem() {
    if (this.imagem === this.imagem2) {
      this.imagem = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
    } else {
      this.imagem = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
    }
  }
}
