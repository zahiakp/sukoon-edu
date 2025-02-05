import { Select } from "antd";
import {useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ROOT_URL } from "../data/func";
// import ImageCrop from "./ImageCrop";
const FormInput = ({
  formik,
  placeholder,
  name,
  label,
  type,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
  type?: string;
}) => {
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}</div>
      <input
        type={type ?? "text"}
        className="w-full p-3 px-5 border border-lime-300 rounded-[10px] outline-lime-500"
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormInput;

export function FormTextArea({
  formik,
  placeholder,
  name,
  label,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
}) {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    formik.setFieldValue(name, data);
  };
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}</div>
      <textarea
        className="w-full p-3 px-5 border border-lime-300 rounded-[10px] outline-lime-500"
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder}
      ></textarea>
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
}
export function FormCkeditor({
  formik,
  placeholder,
  name,
  label,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
}) {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    formik.setFieldValue(name, data);
  };
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}</div>
      <CKEditor
        editor={ClassicEditor}
        // data={formik.values[name]}
        onChange={handleEditorChange}
      />
      {/* <textarea
        className="w-full p-3 px-5 border border-blue-300 rounded-[15px] outline-blue-500"
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder}
      ></textarea> */}
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
}
export function FormSelect({
  formik,
  placeholder,
  name,
  label,
  items,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
  items: any[];
}) {
  return (
    <div className="py-2">
      <div className="text-sm text-primary-600 my-1">{label}</div>

      <Select
        options={items}
        className="w-full"
        size="large"
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={(value:any) => formik.setFieldValue(name, value)}
      ></Select>

      <div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
}

export function FormUpload({
  add_url,
  formik,
  placeholder,
  name,
  label,
  fileTypes,path
}: {
  add_url: any;
  formik: any;
  placeholder: string;
  name: string;
  label: string;
  fileTypes?: string;path?:string
}) {
  const [file, setFile] = useState<string | undefined>(undefined);
  const formik_image = formik.values.file;
  const [view, setView] = useState(false);
  const [img, setImg] = useState<any>(null);
  const [crop, setCrop] = useState("su");
  const handleoptionchange = (option: any) => {
    setCrop(option === crop ? "su" : option);
  };


  return (
    <>
      <div className="py-2">
        <div className="flex gap-6 items-center bg-gray-100 rounded-xl py-3 justify-center mb-2">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="su"
              className="radio"
              value="su"
              checked={crop === "su"}
              onChange={() => handleoptionchange("su")}
            />
            <label htmlFor="su">Direct Upload</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="crop"
              className="radio"
              value="crop"
              checked={crop === "crop"}
              onChange={() => handleoptionchange("crop")}
            />
            <label htmlFor="crop">Crop & Upload</label>
          </div>
        </div>
        <div className="w-full h-72 rounded-2xl bg-gray-100 relative flex flex-col items-center justify-center group">
          {crop !== "crop" ? (
            <input
              type="file"
              className={`absolute w-full h-full  opacity-0`}
              name={name}
              onChange={(e) => {
                setFile(() => {
                  const file = e.target.files![0];
                  formik.setFieldValue(name, file);
                  return URL.createObjectURL(file);
                });
              }}
              accept={fileTypes ?? "image/png, image/jpg, image/jpeg"}
              placeholder={placeholder}
            />
          ) : (
            <button
              type="button"
              onClick={() => setView(true)}
              className={`absolute w-full h-full  opacity-0`}
            >
              click
            </button>
          )}

          { img ? (
            <div
              className="h-[60%] w-[80%] rounded-xl"
              style={{
                backgroundImage: `url(${URL.createObjectURL(img)})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : crop!=="crop" && file ? (
            <div
              className="h-[60%] w-[80%] rounded-xl"
              style={{
                backgroundImage: `url(${file})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ): formik.values.file ?(
            <div
              className="h-[60%] w-[80%] rounded-xl"
              style={{
                backgroundImage: `url(${ROOT_URL}/uploads/${path}/${formik_image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) :(
            <img
              src="/images/selectimage.png"
              alt="hghfkj"
              className="duration-300 h-28"
            />
          )}
          <p className="mt-3 text-gray-400">
            Drag an image here or{" "}
            <span className="text-blue-400">upload a file</span>
          </p>
          {formik.errors[name] && formik.touched[name] && (
            <p className="text-red-600 text-sm my-1 ml-1">
              {formik.errors[name]}
            </p>
          )}

          <div></div>
        </div>
      </div>
      {/* {view && (
        <ImageCrop
          close={() => setView(false)}
          formik={formik}
          name={name}
          img={setImg}
        />
      )} */}
    </>
  );
}

// ------------------cv------------------------

export function FormCV({
  formik,
  placeholder,
  name,
  label,
  fileTypes,
}: {
  formik: any;
  placeholder: string;
  name: string;
  label: string;
  fileTypes?: string;
}) {
  const [file, setFile] = useState();
  return (
    <>
      <div className="py-2">
        <div className="text-sm text-primary-600 my-3"></div>
        <div className="w-full h-72 rounded-2xl bg-white border border-lime-300 relative flex flex-col items-center justify-center group">
          <input
            type="file"
            className={`absolute w-full h-full  opacity-0`}
            name={name}
            onChange={(e) => {
              setFile(() => {
                const file = e.target.files![0];
                formik.setFieldValue(name, file);
              });
            }}
            accept={fileTypes ?? "image/png, image/jpg, image/jpeg"}
            placeholder={placeholder}
          />
          {/* <button
            type="button"
            onClick={() => setView(true)}
            className={`absolute w-full h-full  opacity-0`}
          >
            click
          </button> */}
          {formik.values.cv ? (
            <>
            <div
              className="h-[150px] w-[200px]"
              style={{
                backgroundImage: `url(/image/pdffile.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="mt-3 text-gray-400">
            Drag your CV here or
            <span className="text-blue-400"> Update CV file</span>
          </p></>
          ) : (
            <>
            <img
              src="/image/file.png"
              alt="hghfkj"
              className="duration-300 h-[170px]"
            />
            <p className="mt-3 text-gray-400">
            Drag your CV here or
            <span className="text-blue-400"> upload CV file</span>
          </p></>
          )}
          
          {formik.errors[name] && formik.touched[name] && (
            <p className="text-red-600 text-sm my-1 ml-1">
              {formik.errors[name]}
            </p>
          )}

          <div></div>
        </div>
      </div>
    </>
  );
}
