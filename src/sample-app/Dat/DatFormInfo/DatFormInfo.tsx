import React from "react";
import "../../../styles/button.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface IUser {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  country: string;
  accept: boolean;
}

const DatFormInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    reValidateMode: "onChange",
    defaultValues: {
      id: 0,
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      country: "",
      accept: false,
    },
  });

  const [infoUser, setInfoUser] = React.useState<IUser[]>([]);
  const [editingUser, setEditingUser] = React.useState<IUser | null>(null);
  const [acceptForm, setAcceptForm] = React.useState(false);
  const [page, setPage] = React.useState(0);

  // validate Form
  const registerOptions = {
    // validate Phone Number
    phoneNumber: {
      required: "Please enter your phone number.",
      validate: {
        isNumber: (value: string) => /^\d+$/.test(value) || "Phone number must be a number",
      },
      maxLength: {
        value: 10,
        message: "The phone number consists of only 10 characters.",
      },
    },

    // validate Email
    email: {
      required: "Please enter your email.",
      validate: {
        isEmail: (value: string) => /^\S+@\S+\.\S+$/.test(value) || "Email must have @gmail.com",
      },
      minLength: {
        value: 10,
        message: "Email must have @email.com",
      },
    },
  };

  // check user accept form
  const handleCheck = () => {
    setAcceptForm((preState) => !preState);
  };

  // get infomation form User
  const onSubmit: SubmitHandler<IUser> = (data) => {
    const newData = data;
    newData.id = Math.floor(Math.random() * 100000);
    const newListUser = [...infoUser, newData];

    if (acceptForm === true) {
      console.log(newListUser);
      setInfoUser(newListUser);
      reset();
      setAcceptForm(false);
    }
  };

  // Edit Value
  const handleEdit = (user: IUser) => {
    const newEditList = user;
    setEditingUser(newEditList);
  };

  const handleSave = () => {
    if (!editingUser) return;

    setInfoUser((prevUsers) => prevUsers.map((user) => (user.id === editingUser.id ? editingUser : user)));

    setEditingUser(null);
  };

  // Delete Value
  const handleDelete = (id: number) => {
    const newUsersList = infoUser.filter((user) => user.id !== id);
    setInfoUser(newUsersList);
  };

  return (
    <>
      <h2 style={{ fontWeight: 800, fontSize: "30px" }}>Dat Form Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text__input"
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && <div className="text-red-600">Please enter your full name.</div>}
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text__input"
                    placeholder="Phone Number"
                    {...register("phoneNumber", registerOptions.phoneNumber)}
                  />
                  {errors.phoneNumber && <div className="text-red-600">{errors.phoneNumber.message}</div>}
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text__input"
                    placeholder="Email@domain.com"
                    {...register("email", registerOptions.email)}
                  />
                  {errors.email && <div className="text-red-600">{errors.email.message}</div>}
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="address">Address / Street</label>
                  <input
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text__input"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <div className="text-red-600">Please enter your address.</div>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="country">Country / Region</label>
                  <input
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text__input"
                    placeholder="Country"
                    {...register("country", { required: true })}
                  />
                  {errors.country && <div className="text-red-600">Please enter your country.</div>}
                </div>

                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="billing_same"
                      className="form-checkbox"
                      {...register("accept", { required: true })}
                      onClick={() => {
                        handleCheck();
                      }}
                    />
                    <label htmlFor="billing_same" className="ml-2">
                      The information I provided is completely accurate.
                    </label>
                  </div>
                  {errors.accept && <div className="text-red-600">Please confirm the information.</div>}
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded submit__button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* User List */}

      <div className="bg-white rounded shadow-lg p-4 px-4 !mt-[30px] md:p-8 mb-6">
        <h3 className="text-2xl font-bold font-w-200 !mb-[30px]">User List</h3>
        <div className="border border-solid border-gray-500">
          <table className="w-full !m-0">
            <thead>
              <tr className="text-gray-800 bg-pink-300">
                <th className="p-3 text-center">Full Name</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Phone Number</th>
                <th className="p-3 text-center">Address</th>
                <th className="p-3 text-center">Country</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {infoUser.map((user) => (
                <tr key={user.id} className="text-center border border-gray-200">
                  <td className="py-3 px-2">{user.fullName}</td>
                  <td className="py-3 px-2">{user.email}</td>
                  <td className="py-3 px-2">{user.phoneNumber}</td>
                  <td className="py-3 px-2">{user.address}</td>
                  <td className="py-3 px-2">{user.country}</td>
                  <td className="py-3 px-2 text-blue-500 cursor-pointer button__input">
                    <button
                      className="px-2 button__input-edit"
                      onClick={() => {
                        handleEdit(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 button__input-delete"
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tab Edit User */}
      {editingUser && (
        <div className="bg-white rounded shadow-lg p-4 px-4 !mt-[30px] md:p-8 mb-6">
          <h3 className="text-2xl font-bold font-w-200 !my-[30px]">Edit User</h3>
          <div className="text_edit-layout">
            <input
              type="text"
              value={editingUser.fullName || ""}
              onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
              className="p-2 mt-2 text__input-edit"
              placeholder="Full name"
            />
            <input
              type="text"
              value={editingUser.email || ""}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
              className="p-2 mt-2 text__input-edit"
              placeholder="Email"
            />
            <input
              type="text"
              value={editingUser.phoneNumber || ""}
              onChange={(e) => setEditingUser({ ...editingUser, phoneNumber: e.target.value })}
              className="p-2 mt-2 text__input-edit"
              placeholder="Phone Number"
            />
            <input
              type="text"
              value={editingUser.country || ""}
              onChange={(e) => setEditingUser({ ...editingUser, country: e.target.value })}
              className="p-2 mt-2 text__input-edit"
              placeholder="Country"
            />
            <input
              type="text"
              value={editingUser.address || ""}
              onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
              className="p-2 mt-2 text__input-edit"
              placeholder="Address"
            />

            <button onClick={handleSave} className="button__submit-edit">
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DatFormInfo;
