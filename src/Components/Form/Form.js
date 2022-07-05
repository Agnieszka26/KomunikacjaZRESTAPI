import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import "../../index.css";
function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: {errors, isSubmitSuccessful},
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      bio: "",
      gender: "",
      acceptance: false,
    },
  });
  const [data, setData] = useState({});
  const [checkSubmit, setCheckSubmit] = useState(false);

  const onSubmit = (data) => {
    setData(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setCheckSubmit(true);
      reset({firstName: "", email: "", bio: "", gender: "", acceptance: false});
    }
  }, [formState, reset, isSubmitSuccessful, checkSubmit]);
  return (
    <>
      <div className="main">
        <div className="signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label id="label">Sign up</label>

            <div>
              <label className="label" htmlFor="fname">
                First name:
              </label>
              <input
                style={{border: errors.firstName ? "1px solid red" : ""}}
                className="input"
                {...register("firstName", {
                  onChange: () => setCheckSubmit(false),
                  required: "This is required",
                })}
                placeholder="Your name"
              />
              <p> {errors.firstName?.message}</p>
            </div>

            <div>
              <label className="label" id="email" htmlFor="email">
                E-mail:
              </label>
              <input
                style={{border: errors.email ? "1px solid red" : ""}}
                className="input"
                {...register("email", {
                  onChange: () => setCheckSubmit(false),
                  required: "This is required",
                })}
                placeholder="Your e-mail"
              />
            </div>
            <p> {errors.email?.message}</p>
            <div>
              <label className="label" htmlFor="bio">
                Bio:
              </label>
              <textarea
                style={{border: errors.bio ? "1px solid red" : ""}}
                className="input"
                {...register("bio", {
                  onChange: () => setCheckSubmit(false),
                  required: "This is required",
                })}
                placeholder="Put your short story"
              />
              <p> {errors.bio?.message}</p>
            </div>

            <div>
              <label className="label" htmlFor="gender">
                Gender:
              </label>
              <select
                style={{border: errors.gender ? "2px solid red" : ""}}
                className="input"
                {...register("gender", {
                  onChange: () => setCheckSubmit(false),
                  required: "This is required",
                })}
              >
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
              <p> {errors.gender?.message}</p>
            </div>

            <div
              className="checkbox"
              style={{border: errors.acceptance ? "1px solid red" : ""}}
            >
              <input
                type="checkbox"
                {...register("acceptance", {
                  onChange: () => setCheckSubmit(false),
                  required: "This is required",
                })}
              />
              <label className="acceptance" htmlFor="acceptance">
                I accept the terms and conditions
              </label>
            </div>
            <p style={{margin: "0"}}> {errors.acceptance?.message}</p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {checkSubmit && <h1 className="thankYou"> Thank you for your answers</h1>}
    </>
  );
}

export default Form;
