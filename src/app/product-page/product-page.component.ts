import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model"
import { ShoeService } from "../shoe.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  product?: Product
  products!: Product[]
  error = false
  id: string = ""

  constructor(private shoeService: ShoeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.shoeService.listShoes.subscribe(response => {
      this.products = response.products;
      this.product = this.products.find(product => product.id === +this.id)
    })
  }
}
