function getApplication() {
  return Promise.resolve({
    id: "APP-101",
    candidate: "Rahul",
    status: "not submitted",
  });
}

function verifiedApplication(application) {
  if (application.status !== "submitted") {
    return Promise.reject(new Error("Application cannot be verified"));
  }
  return Promise.resolve({
    ...application,
    verified: true,
  });
}

function prepareConfirmation(application) {
  return Promise.resolve(
    `Application ${application.id} verified for ${application.candidate}`,
  );
}

getApplication()
  .then((application) => {
    console.log("Application retrieved");
    return verifiedApplication(application);
  })
  .then((application) => {
    console.log("Application verified");
    return prepareConfirmation(application);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("WorkFlow Failed:", error.message);
  });
