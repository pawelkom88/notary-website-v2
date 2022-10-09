import CustomPage from "../components/custom-page/CustomPage";

export default function Success() {
  return (
    <CustomPage message="Thank you !" time={5}>
      <p class="paragraph">I have received your enquiry and will respond to you within 24 hours.</p>
      <br />
      <p className="paragraph">
        For urgent enquiries please call <a href="tel:447401388094">+447401388094</a>
      </p>
    </CustomPage>
  );
}
