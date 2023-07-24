import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { user } = useContext(AuthContext);
  const [theUser, setTheUser] = useState([]);
    console.log(theUser);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTheUser(data));
  }, [user]);

  const college = useLoaderData();
  console.log(college);
  return (
    <div className="">
        <h1 className="title">{college[0].collegeName}</h1>
        <p className="text-center bg-primary w-60 mx-auto p-4 rounded-3xl -mt-6 text-2xl font-bold">Admission Form</p>
      <form
        className="w-full text-primary p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full rounded-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "name !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.school?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.school.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Email Address</span>
            </label>
            <input
              type="text"
              placeholder="Put active email must"
              className="input input-bordered w-full rounded-full"
              {...register("course", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.course?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.course.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">School Name</span>
            </label>
            <input
              type="text"
              placeholder="Present/Previous"
              className="input input-bordered w-full rounded-full"
              {...register("school", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.school?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.school.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Course Name</span>
            </label>
            <input
              type="text"
              placeholder="Major Subject or Department"
              className="input input-bordered w-full rounded-full"
              {...register("course", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.course?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.course.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Date of Birth</span>
            </label>
            <input
              type="date"
              placeholder="Present/Previous"
              className="input input-bordered w-full rounded-full"
              {...register("DOB", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.DOB?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.DOB.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter Present Address Only"
              className="input input-bordered w-full rounded-full"
              {...register("address", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Father Name</span>
            </label>
            <input
              type="text"
              placeholder="Can put father figure also"
              className="input input-bordered w-full rounded-full"
              {...register("father", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.father?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.father.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Mothers Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter you mothers name"
              className="input input-bordered w-full rounded-full"
              {...register("mother", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.mother?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.mother.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Monthly Income</span>
            </label>
            <input
              type="number"
              placeholder="Can put father figure also"
              className="input input-bordered w-full rounded-full"
              {...register("income", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.income?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.income.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className="font-semibold text-lg">Your BIO</span>
            </label>
            <input
              type="text"
              placeholder="Finish in 1 Line"
              className="input input-bordered w-full rounded-full"
              {...register("BIO", {
                required: {
                  value: true,
                  message: "Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors.BIO?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.BIO.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <input
          className="btn btn-primary w-full"
          type="submit"
          value={"Update profile"}
        />
      </form>
    </div>
  );
};

export default AdmissionForm;
