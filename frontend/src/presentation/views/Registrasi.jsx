import { LayoutContext } from "@/context/Context";
import useToast from "@/hooks/useToast";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthApi } from "../logics/useAuthApi";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { useRef } from "react";
import { SelectButton } from "primereact/selectbutton";

const RegistrasiPage = () => {
  const stepperRef = useRef(null);
  const [emailDosen, setEmailDosen] = useState("");
  const [nidn, setNidn] = useState("");
  const [namaDosen, setNamaDosen] = useState("");
  const [emailMhs, setEmailMhs] = useState("");
  const [nim, setNim] = useState("");
  const [namaMhs, setNamaMhs] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const signOptions = ['Mahasiswa', 'Dosen']
  const [selectedOption, setSelectedOption] = useState(signOptions[0]);

  const { layoutConfig } = useContext(LayoutContext);
  const navigate = useNavigate();
  const toast = useToast();
  const { register } = useAuthApi();


  //#region Styles
  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );
  //#endregion Styles

  //#region Methods Mahasiswa
  const handleRegisterMhs = async () => {
    console.log(emailMhs,password,nim,namaMhs)
    if (!emailMhs || !password || !nim || !namaMhs) {
      toast.show({
        severity: "error",
        summary: "Register failed",
        detail: "Please enter email, password, NIM, and name.",
      });
      return;
    }
    await register.mutateAsync({ email:emailMhs,  password, nim, name: namaMhs });
    console.log("Logging in with:", { emailMhs, password,nim,namaMhs });
   
  };

  const handleSignChange = (e) => {
    setSelectedOption(e.value);
  }
  //#endregion Methods Mahasiswa

  //#region Methods Dosen
  const handleRegisterDosen = async () => {
    console.log(emailDosen,password,nidn,namaDosen)
    if (!emailDosen || !password || !nidn || !namaDosen) {
      toast.show({
        severity: "error",
        summary: "Register failed",
        detail: "Please enter email, password, NIDN, and name.",
      });
      return;
    }
    await register.mutateAsync({ email :emailDosen, password, nidn, name: namaDosen });
    console.log("Logging in with:", { emailDosen, password, nidn, namaDosen });

    // navigate("/app", {
    //   replace: true,
    // });
  };
  //#endregion Methods Dosen

  useEffect(() => {
    if (register.isSuccess) {
      toast.show({
        severity: "success",
        summary: "Register success",
        detail: "Register success",
      });
      navigate("/app", {

        replace: true,
      });
    }
  }, [register.isSuccess, navigate]);

  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center">
        <Stepper
          ref={stepperRef}
          activeIndex={0}
          className="mt-8 mb-8"
          style={{ flexBasis: "50rem" }}
        >
          <StepperPanel header="Sign Up Mahasiswa">
            <SelectButton
              value={selectedOption}
              options={signOptions}
              onChange={handleSignChange}
            />
            {selectedOption === "Mahasiswa" ? (
              <div
                style={{
                  borderRadius: "56px",
                  padding: "0.3rem",
                  background:
                    "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
                  backgroundColor: "#2f4860",
                }}
              >
                <div
                  className="w-full surface-card py-7 px-5 sm:px-8"
                  style={{ borderRadius: "53px" }}
                >
                  <div className="text-center mb-5">
                    <span className="text-600 font-bold text-3xl">
                      Sign Up to continue
                    </span>
                  </div>

                  {register.isError && (
                    <div className="flex align-items-center justify-content-center mb-5">
                      <span className="text-red-500 font-medium">
                        {register.error.message}
                      </span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="email1"
                      className="block text-900 text-xl font-medium mb-2"
                    >
                      Email
                    </label>
                    <InputText
                      id="email1"
                      type="text"
                      placeholder="Email address"
                      className="w-full md:w-30rem mb-5"
                      value={emailMhs}
                      onChange={(e) => setEmailMhs(e.target.value)}
                      style={{ padding: "1rem" }}
                    />

                    <label
                      htmlFor="nim1"
                      className="block text-900 text-xl font-medium mb-2"
                    >
                      NIM
                    </label>
                    <InputText
                      id="nim1"
                      type="number"
                      placeholder="NIM"
                      className="w-full md:w-30rem mb-5"
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                      style={{ padding: "1rem" }}
                    />
                    <label
                      htmlFor="name"
                      className="block text-900 text-xl font-medium mb-2"
                    >
                      Nama Mahasiswa
                    </label>
                    <InputText
                      id="nim1"
                      type="text"
                      placeholder="name"
                      className="w-full md:w-30rem mb-5"
                      value={namaMhs}
                      onChange={(e) => setNamaMhs(e.target.value)}
                      style={{ padding: "1rem" }}
                    />

                    <label
                      htmlFor="password1"
                      className="block text-900 font-medium text-xl mb-2"
                    >
                      Password
                    </label>
                    <Password
                      inputId="password1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      toggleMask
                      className="w-full mb-5"
                      inputClassName="w-full p-3 md:w-30rem"
                    ></Password>

                    <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
                    <Button
                      label="Sign Up"
                      className="w-full p-3 text-xl"
                      loading={register.isPending}
                      onClick={handleRegisterMhs}
                    ></Button>
                  </div>

                  <p>
                    Already have an account?<a href="/login"> Sign In</a>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="email1"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Email
                </label>
                <InputText
                  id="email1"
                  type="text"
                  placeholder="Email address"
                  className="w-full md:w-30rem mb-5"
                  value={emailDosen}
                  onChange={(e) => setEmailDosen(e.target.value)}
                  style={{ padding: "1rem" }}
                />
                <label
                  htmlFor="nidn1"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  NIDN
                </label>
                <InputText
                  id="nidn1"
                  type="text"
                  placeholder="NIDN"
                  className="w-full md:w-30rem mb-5"
                  value={nidn}
                  onChange={(e) => setNidn(e.target.value)}
                  style={{ padding: "1rem" }}
                />
                <label
                  htmlFor="dosen1"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Nama Dosen
                </label>
                <InputText
                  id="dosen1"
                  type="text"
                  placeholder="Nama Dosen"
                  className="w-full md:w-30rem mb-5"
                  value={namaDosen}
                  onChange={(e) => setNamaDosen(e.target.value)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="password1"
                  className="block text-900 font-medium text-xl mb-2"
                >
                  Password
                </label>
                <Password
                  inputId="password1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  toggleMask
                  className="w-full mb-5"
                  inputClassName="w-full p-3 md:w-30rem"
                ></Password>

                <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
                <Button
                  label="Sign Up"
                  className="w-full p-3 text-xl"
                  loading={register.isPending}
                  onClick={handleRegisterDosen}
                ></Button>
              </div>
            )}

            <div className="flex pt-4 justify-content-end">
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header="Sign Up Dosen">
            <div
              style={{
                borderRadius: "56px",
                padding: "0.3rem",
                background:
                  "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
                backgroundColor: "#ff4860",
              }}
            >
              <div
                className="w-full surface-card py-7 px-5 sm:px-8"
                style={{ borderRadius: "53px" }}
              >
                <div className="text-center mb-5">
                  <span className="text-700 text-3xl font-bold">
                    Sign Up to continue
                  </span>
                </div>

                {register.isError && (
                  <div className="flex align-items-center justify-content-center mb-5">
                    <span className="text-red-500 font-medium">
                      {register.error.message}
                    </span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email1"
                    className="block text-900 text-xl font-medium mb-2"
                  >
                    Email
                  </label>
                  <InputText
                    id="email1"
                    type="text"
                    placeholder="Email address"
                    className="w-full md:w-30rem mb-5"
                    value={emailDosen}
                    onChange={(e) => setEmailDosen(e.target.value)}
                    style={{ padding: "1rem" }}
                  />
                  <label
                    htmlFor="nidn1"
                    className="block text-900 text-xl font-medium mb-2"
                  >
                    NIDN
                  </label>
                  <InputText
                    id="nidn1"
                    type="text"
                    placeholder="NIDN"
                    className="w-full md:w-30rem mb-5"
                    value={nidn}
                    onChange={(e) => setNidn(e.target.value)}
                    style={{ padding: "1rem" }}
                  />
                  <label
                    htmlFor="dosen1"
                    className="block text-900 text-xl font-medium mb-2"
                  >
                    Nama Dosen
                  </label>
                  <InputText
                    id="dosen1"
                    type="text"
                    placeholder="Nama Dosen"
                    className="w-full md:w-30rem mb-5"
                    value={namaDosen}
                    onChange={(e) => setNamaDosen(e.target.value)}
                    style={{ padding: "1rem" }}
                  />

                  <label
                    htmlFor="password1"
                    className="block text-900 font-medium text-xl mb-2"
                  >
                    Password
                  </label>
                  <Password
                    inputId="password1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    toggleMask
                    className="w-full mb-5"
                    inputClassName="w-full p-3 md:w-30rem"
                  ></Password>

                  <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
                  <Button
                    label="Sign Up"
                    className="w-full p-3 text-xl"
                    loading={register.isPending}
                    onClick={handleRegisterDosen}
                  ></Button>
                </div>

                <p>
                  Already have an account?<a href="/login"> Sign In</a>
                </p>
              </div>
            </div>
            <div className="flex pt-4 justify-content-start">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current.prevCallback()}
              />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
};

export default RegistrasiPage;
