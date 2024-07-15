import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { TemplatebuilderService } from '../../templatebuilder.service';
 
@Component({
  selector: 'app-search-operation-dialog',
  templateUrl: './search-operation-dialog.component.html',
  styleUrls: ['./search-operation-dialog.component.css'],
})
export class SearchOperationDialogComponent implements OnInit {
  searchForm!: FormGroup;
  selectedType: string = 'Category'; // Default to category type
  fieldValue: any[] = [];
  filteredOptions?: Observable<any[]>;
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private templateService: TemplatebuilderService
  ) {}
 
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      type: [this.selectedType, Validators.required],
      fieldName: ['', Validators.required],
    });
 
    this.onTypeSelect(this.selectedType); // Initialize with default type
  }
 
  onSubmit(): void {
    this.templateService.emitDialogFormData({
      fieldValue: this.searchForm.get('fieldName')?.value,
      action: 'search',
      meta: this.data.meta,
      operation: this.data.operation,
    });
  }
 
  onTypeSelect(type: string): void {
    this.selectedType = type;
    this.searchForm.get('fieldName')?.patchValue('');
 
    console.log('this.data:', this.data, ':: ', type);
 
    // Filter data based on selected type
    const selectedCategory = this.data.categoriesData.find((category: any) => {
      console.log(
        'category: ',
        category,
        typeof this.selectedType,
        typeof category.id
      );
 
      return category.id === this.selectedType || category.name === this.selectedType;
    });
    console.log('selectedCategory', selectedCategory);
 
    if (selectedCategory) {
      this.fieldValue = selectedCategory.states || [];
    } else {
      console.error(
        `Category with type '${this.selectedType}' not found in data.`
      );
      this.fieldValue = []; // Reset to empty array if category not found
    }
 
    console.log('this.fieldValue:', this.fieldValue);
 
    this.filteredOptions = this.searchForm.get('fieldName')?.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
 
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.fieldValue.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}