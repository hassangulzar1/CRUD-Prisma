import { prisma } from "@/config/prisma";
import Form from "@/component/Form";
const fetchUsers = async () => {
  try {
    const users = await prisma.User.findMany();
    return users;
  } catch (error) {
    alert("error: ", error);
  }
};

export default async function Home() {
  const usersData = await fetchUsers();
  return (
    <div style={{ backgroundColor: "green" }}>
      <table>
        <tr>
          <td>
            {/* <!--HTML form for crud operation--> */}
            <Form />
          </td>
          <td>
            <table className="list" id="employeeList">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>email</th>
                  <th>age</th>
                  <th>sallary</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {usersData?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.sallary}</td>
                    <td>
                      <button className=" mx-2 underline">Edit</button>
                      <button className="underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}
