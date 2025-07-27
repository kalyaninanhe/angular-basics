import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products: any;
  currentPage: number = 1;
  itemsPerPage:number = 5;
  totalPages:number = 0;
  paginatedProducts: any[] = [];

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.dataService.getProducts().subscribe({
      next: (data : any) => {
        this.products = data;
        console.log("Products : ", this.products)
        this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
        this.updatePaginatedProducts();
      },
      error: (err : any) => {
        console.log("Product API err : ", err)
      }
    });
  }

  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    console.log("start: ",start)
    const end = start + this.itemsPerPage;
    console.log("end: ",end)
    this.paginatedProducts = this.products.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }
}
