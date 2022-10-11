import React from "react";
import DeleteModal from "../../components/modals/DeleteRecordModal";

export default function RecordItem({ record }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {record.foracId}
      </th>

      <td className="py-4 px-6">{record.custId}</td>
      <td className="py-4 px-6">{record.accountName}</td>
      <td className="py-4 px-6">{record.accountNumber}</td>
      <td className="py-4 px-6">{record.phoneNumber}</td>
      <td className="py-4 px-6">{record.additionalPhoneNumber}</td>
      <td>
        <div className="dropdown">
          <img
            src="/images/optionsIcon.png"
            alt=""
            className="btn dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Add number
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Edit record
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete record
              </a>
            </li>
          </ul>
        </div>
        <DeleteModal />
      </td>
    </tr>
    
  );
}
