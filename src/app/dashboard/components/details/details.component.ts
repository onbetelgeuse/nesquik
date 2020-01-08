import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FileService } from 'src/app/shared/services/file.service';
import { StructureValidators } from 'src/app/shared/validators/structure.validators';
import { FileDto } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public form: FormGroup;
  @Input() file: FileDto;

  public get images(): FormArray {
    return this.form.controls.images as FormArray;
  }

  constructor(
    public activeModal: NgbActiveModal,
    public readonly fileService: FileService,
    public readonly fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (!this.file) {
      this.file = {
        filename: undefined,
        originalname: undefined,
        encoding: undefined,
        mimetype: undefined,
        destination: undefined,
        fieldname: undefined,
        path: undefined,
        size: undefined,
      };
    }
    this.loadForm();
  }

  public loadForm() {
    this.form = this.fb.group({
      name: [
        this.file.originalname,
        [
          Validators.required,
          StructureValidators.uniqueName(
            this.fileService,
            this.file.originalname,
          ),
        ],
      ],
      images: this.fb.array([], [StructureValidators.uniqueImage], []),
    });
  }

  public addImageFormGroup(): void {
    const newImageFormGroup: FormGroup = this.createImageGroup();
    this.images.push(newImageFormGroup);
  }

  private createImageGroup(): FormGroup {
    return this.fb.group({ name: ['', []], filename: ['', []] });
  }
}
