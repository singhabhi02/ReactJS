function getApplication() {
  return Promise.resolve({
    id: "APP-101",
    candidate: "Rahul",
    status: "submitted",
  });
}

function verifyApplication(application) {
  if (application.status !== "submitted") {
    return Promise.reject(new Error("Application cannot be verified"));
  }
  return Promise.resolve({
    ...application,
    verified: true,
  });
}

async function processApplication() {
  try {
    const application = await getApplication();
    console.log("Application retrieved");

    const verifiedApplication = await verifyApplication(application);
    console.log("Application Verified");

    console.log(`Confirmation prepared for ${verifiedApplication.candidate}`);
  } catch (error) {
    console.error("Workflow failed:", error.message);
  }
};

processApplication();
