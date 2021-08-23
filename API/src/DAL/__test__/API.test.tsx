import React from "react";
import axios from "axios";

import {getData, getDataById} from "../API";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const requestedParams1 = {
  query: "nught",
  page: 1,
  elementsOnPage: 10,
  orient: "landscape",
  color: "blue",
  orderBy: "latest"
};
const requestedId = "testId";

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a"
          },
          {
            objectID: "2",
            title: "b"
          }
        ]
      }
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getData(requestedParams1)).resolves.toEqual(data.data);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(getData(requestedParams1)).rejects.toThrow(errorMessage);
  });
});

describe("fetchData By Id", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a"
          },
          {
            objectID: "2",
            title: "b"
          }
        ]
      }
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getDataById(requestedId)).resolves.toEqual(data.data);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(getDataById(requestedId)).rejects.toThrow(errorMessage);
  });
});
