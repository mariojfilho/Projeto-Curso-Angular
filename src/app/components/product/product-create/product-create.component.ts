import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      //com o método subscribe, vou ser notificado quando a resposta chegar
      this.ProductService.showMessage("Produto criado com sucesso!"); //mostra a mensagem quando chegar a resposta
      this.router.navigate(["/products"]); //vai para a página de produto
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
